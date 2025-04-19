'use server'

import getCollection, { URL_COLLECTION } from "@/db"

export default async function shortenURL(url: string, alias: string) {
    if (!url || !alias || alias === "/" || alias === " ") {
        return {error: "Please enter a valid URL or alias!"}
    }

    try {
        const valid = await fetch(url)
        if (valid.status != 200) {
            return { error: "Please enter a valid URL! "}
        }
    } catch {
        return { error: "Please enter a valid URL! "}
    }
    
    const base = "http://localhost:3000"
    const urlCollection = await getCollection(URL_COLLECTION)
    const existing = await urlCollection.findOne({ alias })
  
    if (existing) {
      return { error: 'Please choose another alias!' }
    }

    const res = await urlCollection.insertOne({alias, url})

    return { shortenedUrl: `${base}/${alias}` }
}