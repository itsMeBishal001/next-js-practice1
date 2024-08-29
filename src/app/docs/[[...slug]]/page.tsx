export default function docsCatchAllSegment({ params }: { params: { slug: string[] } }) {
    console.log(params)
    return (
        <>
            <h1>hii from docsCatchAllSegment page </h1>
            <h1>here slug we reciving as a array from =&gt; params.slug ...({params?.slug})</h1>
            <h1>and if we are in the same page then no params.plug is empty and to stay without going the the error page make the file name like [[...name]]</h1>
        </>
    )
}