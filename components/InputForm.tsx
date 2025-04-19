'use client'

import shortenURL from "@/app/shorten/shortenURL"
import { useState } from "react"
import styled from "styled-components"

const InputContainter = styled.div`
    background: #b6b4b4;
    display: flex;
    flex-direction: column;
    height: 90vh;
    align-items: center;
`

const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
    width: 900px;
    padding: 35px;
    gap: 14px;
    background-color: #4e4e4e;
    border: 3px solid #000000;
    border-radius: 8px;
`

const StyledInput = styled.input`
    padding: 16px 19px;
    font-size: 20px;
    border: 1px solid #000000;
    border-radius: 8px;
`

const StyledButton = styled.button`
    padding: 12px 16px;
    background-color: #d6320d;
    font-size: 25px;
    color: black;
    border: none;
    border-radius: 8px;
`

const StyledResult = styled.h3`
    color: white;
    text-align: center;
    font-size: 35px;
    margin: 0 auto;
    padding-top: 10px;
`

export default function InputForm () {
    const [url, setUrl] = useState('')
    const [alias, setAlias] = useState('')
    const [result, setResult] = useState('')

    return (
        <InputContainter>
            <h1>URL Shortener</h1>
            <StyledForm onSubmit={(e) => {
                e.preventDefault()
                shortenURL(url, alias)
                .then((res) => {
                    if (res.error) {
                        setResult("Error: " + res.error)

                    } else {
                        setResult("Short URL: " + res.shortenedUrl)
                    }
                })
                .catch((err) => {
                    console.error(err)
                    setResult("Something went wrong")
                })
            }}>
                <StyledInput
                    type="text"
                    placeholder="Enter a URL that you want to shorten"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <StyledInput
                    type="text"
                    placeholder="Enter a custom alias for your new URL"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                />
                <StyledButton type="submit">Shorten</StyledButton>
                {result && <StyledResult>{result}</StyledResult>}
            </StyledForm>
        </InputContainter>
    )
}