import Connect4 from './components/Connect4';

//export default: makes this the main component that Next.js will use for this page
//function Page(): the component name
//return(): returns JSX (HTML like content)
//<main>: wrapper for page content
export default function Page()
{
    return(
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-5xl font-black text-center my-8 text-blue-300 animate-pulse tracking-widest relative after:content-['Connect_4'] after:text-blue-500 after:absolute after:left-0 after:right-0 after:blur-sm">
                Connect 4
            </h1>
            <Connect4/>
        </div>
    )
}
//className="container mx-auto px-4 py-8" -> creating a wrapper to center the content, setting margin left and right to 'auto'
//to center the container, adding padding on left and right of 16px, adding padding on top and bottom of 32px

//className="text-4xl font-bold text-center text-black-400" -> sizing the text to extra large 36 pixels, bolding the text, centering the text, and making it black