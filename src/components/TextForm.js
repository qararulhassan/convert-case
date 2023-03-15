import React, {useState} from 'react'

export default function TextForm(props) {
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const toSentense = () => {
        let newText = text
                    .toLowerCase()
                    .split("\n")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join("\n");
        setText(newText);
    }
    const toCapitalize = () => {
        let newText = text
                    .toLowerCase()
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
                    .split("\n")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join("\n");
        setText(newText);
    }
    const toAlternate = () => {
        let newText = text
                    .split(" ")
                    .map(wrd => wrd
                        .split("")
                        .map((word, index) => index % 2 ? word.toUpperCase() : word.toLowerCase())
                        .join(""))
                    .join(" ")
                    .split("\n")
                    .map(wrd => wrd
                        .split("")
                        .map((word, index) => index % 2 ? word.toUpperCase() : word.toLowerCase())
                        .join(""))
                    .join("\n");
        setText(newText);
    }
    const toInverse = () => {
        let newText = text
                    .split(" ")
                    .map(wrd => wrd
                        .split("")
                        .map((word, index) => index % 2 ? word.toLowerCase() : word.toUpperCase())
                        .join(""))
                    .join(" ")
                    .split("\n")
                    .map(wrd => wrd
                        .split("")
                        .map((word, index) => index % 2 ? word.toLowerCase() : word.toUpperCase())
                        .join(""))
                    .join("\n");
        setText(newText);
    }
    const toClear = () => {
        let newText = "";
        setText(newText);
    }
    const toCopy = (event) => {
        let textValue = document.getElementById("analyzeArea").value;
        navigator.clipboard.writeText(textValue);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const mode = (event) => {
        if (event.target.classList.contains('lightmode')) {
            document.getElementsByTagName("html")[0].classList.add("dark", "bg-slate-900");
        } else {
            document.getElementsByTagName("html")[0].classList.remove("dark", "bg-slate-900");
        }
    }

    const [text, setText] = useState('Default text here');
    let wordCount = text.split(" ").length - 1,
        characterCount = text.length,
        lineCount = text.split("\n").length,
        readTime = (((0.008 * text.length).toFixed(2)).split(".").join("")),
        readMinutes = Math.floor(readTime / 60),
        readSeconds = readTime - readMinutes * 60;

    return (
        <div className='container mx-auto my-20 px-4'>
            <div className='block mb-4'>
                <p className='lightmode modeswitch flex items-center gap-x-2 dark:hidden text-slate-900 cursor-pointer w-fit' onClick={mode}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-slate-400 dark:stroke-slate-500"></path>
                        <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-slate-400 dark:stroke-slate-500"></path>
                    </svg> Light
                </p>
                <p className='darktmode modeswitch hidden items-center gap-x-2 dark:flex text-white cursor-pointer w-fit' onClick={mode}>
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-sky-400/20"></path>
                        <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-sky-500"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-sky-500"></path>
                    </svg> Dark
                </p>
            </div>
            <h1 className='text-4xl mb-4 text-slate-900 dark:text-white'>{props.heading}</h1>
            <div className="my-6">
                <textarea className="border border-indigo-600 dark:border-gray-400 dark:bg-slate-700 dark:text-white w-full resize-none p-4 rounded outline-none" value={text} onChange={handleOnChange} name="analyze" id="analyzeArea" rows="10"></textarea>
                <p className='text-sm text-gray-600 dark:text-white flex flex-wrap justify-between'>
                    <span>Word Count: {wordCount} | Character Count: {characterCount} | Line Count: {lineCount}</span>
                    <span>{readMinutes} Minutes and {readSeconds} Seconds read</span>
                </p>
            </div>
            <div className="flex gap-4 flex-wrap">
                <button className="bg-blue-600 dark:bg-sky-500 hover:bg-red-600 dark:hover:bg-slate-700 text-white px-4 py-2 ease-in-out duration-300 rounded" type="button" onClick={toUpperCase}>UPPERCASE</button>
                <button className="bg-blue-600 dark:bg-sky-500 hover:bg-red-600 dark:hover:bg-slate-700 text-white px-4 py-2 ease-in-out duration-300 rounded" type="button" onClick={toLowerCase}>lowercase</button>
                <button className="bg-blue-600 dark:bg-sky-500 hover:bg-red-600 dark:hover:bg-slate-700 text-white px-4 py-2 ease-in-out duration-300 rounded" type="button" onClick={toSentense}>Sentense case</button>
                <button className="bg-blue-600 dark:bg-sky-500 hover:bg-red-600 dark:hover:bg-slate-700 text-white px-4 py-2 ease-in-out duration-300 rounded" type="button" onClick={toCapitalize}>Capitalize Case</button>
                <button className="bg-blue-600 dark:bg-sky-500 hover:bg-red-600 dark:hover:bg-slate-700 text-white px-4 py-2 ease-in-out duration-300 rounded" type="button" onClick={toAlternate}>aTeRnAtE cAsE</button>
                <button className="bg-blue-600 dark:bg-sky-500 hover:bg-red-600 dark:hover:bg-slate-700 text-white px-4 py-2 ease-in-out duration-300 rounded" type="button" onClick={toInverse}>InVeRsE cAsE</button>
                <button className="bg-blue-600 dark:bg-sky-500 hover:bg-red-600 dark:hover:bg-slate-700 text-white px-4 py-2 ease-in-out duration-300 rounded" type="button" onClick={toCopy}>Copy</button>
                <button className="bg-blue-600 dark:bg-sky-500 hover:bg-red-600 dark:hover:bg-slate-700 text-white px-4 py-2 ease-in-out duration-300 rounded" type="button" onClick={toClear}>Clear</button>
            </div>
        </div>
    )
}
