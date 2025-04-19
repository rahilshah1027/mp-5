import getCollection, { URL_COLLECTION } from '@/db';
import { redirect } from 'next/navigation';

export default async function AliasPage({ params }: { params: { alias: string } }) {
    const { alias } = params

    const urlCollection = await getCollection(URL_COLLECTION)
    const result = await urlCollection.findOne({ alias })
    if (result) {
        redirect(result.url)
    } else {
        redirect('/') 
    }
}