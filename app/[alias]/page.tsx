import getCollection, { URL_COLLECTION } from '@/db';
import { redirect } from 'next/navigation';

export default async function AliasPage(props: any) {

    const { alias } = props.params

    const urlCollection = await getCollection(URL_COLLECTION)
    const result = await urlCollection.findOne({ alias })
    if (result) {
        redirect(result.url)
    } else {
        redirect('/') 
    }
}