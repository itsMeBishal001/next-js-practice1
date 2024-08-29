export default function reviewId({ params }: { params: { reviewId: string, productId: string } }) {
    return (
        <h1>hii from review no {params.reviewId} for product number {params.productId}</h1>
    )
}