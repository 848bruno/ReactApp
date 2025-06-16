

interface ImageProps {
    imageUrl: string;
    atlTxt:string;
}

function Image ({ imageUrl, atlTxt }: ImageProps) {
    return (
<>
<img
    src={imageUrl}
    alt={atlTxt}
/>

</>

    )}
export default Image;