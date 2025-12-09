export default function SubmitButton({ text, type = "button", className = "" }) {

    return (
        <button
            type={type}
            className={`border rounded-md p-1.5 cursor-pointer bg-black text-white hover:animate-pulse ${className}`}>
            {text}
        </button>
    )
}