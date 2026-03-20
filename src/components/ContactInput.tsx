import { useEffect, useRef, useState } from "react";

export default function ContactInput({ className = "" }) {
    const [open, setOpen] = useState(false);
    // const [showTerms, setShowTerms] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);
    const [status, setStatus] = useState<string | null>(null);



    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // 1. Recupero i valori
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        // const terms = formData.get("terms");

        // 2. Validazione Nome (Minimo 3 lettere)
        if (name.trim().length < 3) {
            setStatus("Please enter a name with at least 3 characters.");
            return;
        }

        // 3. Validazione Email (RegEx standard)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus("Please enter a valid email address.");
            return;
        }

        // 4. Validazione Messaggio (Opzionale, ma consigliata)
        if (message.trim().length < 5) {
            setStatus("Please write a slightly longer message.");
            return;
        }

        // 5. Validazione Termini
        // if (!terms) {
        //     setStatus("You must accept the terms before sending.");
        //     return;
        // }

        // Se passa tutti i controlli, pulisco lo stato e invio
        setStatus("Sending...");

        try {
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (res.ok) {
                setStatus("Message sent successfully!");
                form.reset();
                setOpen(false);
                // Pulisco il messaggio di successo dopo 5 secondi
                setTimeout(() => setStatus(null), 5000);
            } else {
                throw new Error("Error sending to Netlify");
            }
        } catch (error) {
            setStatus("Error sending message. Please try again.");
        }
    };


    return (
        <>
            {/* FORM */}
            <form data-netlify="true" data-netlify-honeypot="hp_name" name="contact" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div
                    ref={boxRef}
                    className={`dark:bg-black-custom bg-gray-lighter rounded-lg font-medium text-sm font-satoshi grow p-2 mb-2 ${className}`}
                >
                    {/* HONEYPOT */}
                    <input type="text" name="hp_name" style={{ display: 'none' }} />

                    {/* INPUT PRINCIPALE */}
                    <textarea
                        placeholder="Hi Guys..."
                        onFocus={() => setOpen(true)}
                        id="message"
                        name="message"
                        rows={1}
                        className={`w-full py-2 px-4 ${open ? "" : "-mb-1.5"} rounded-md bg-white dark:bg-black focus:border-black-custom dark:focus:border-white outline-none text-gray-darker`}
                    ></textarea>

                    {/* WRAPPER ANIMATO */}
                    <div
                        className={` overflow-hidden ${open ? "max-h-125 opacity-100 mt-1" : "max-h-0 opacity-0"
                            }`}
                    >
                        {/* NAME */}
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            className="w-full py-2 px-4 mb-2 text-gray-darker rounded-md bg-white dark:bg-black focus:border-black-custom dark:focus:border-white outline-none"
                        />

                        {/* EMAIL */}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="info@studiorasolare.com"
                            className="w-full py-2 px-4 mb-2 rounded-md text-gray-darker bg-white dark:bg-black focus:border-black-custom dark:focus:border-white outline-none"
                        />

                        {/* CHECKBOX TERMINI */}
                        {/* <label className="flex items-start gap-2 text-xs text-gray-darker dark:text-gray-300 mb-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="terms"
                                className="mt-0.5 dark:accent-black-custom accent-white "
                            />
                            <span>
                                I accept the data policy.{" "}
                                <button
                                    type="button"
                                    className="underline hover:opacity-70"
                                    onClick={() => setShowTerms(true)}
                                >
                                    Terms
                                </button>
                            </span>
                        </label> */}

                        {/* BUTTON */}
                        <button className="transition-all duration-200 w-full py-2 px-4 rounded-md bg-white dark:bg-black hover:bg-light-hover dark:hover:bg-dark-hover outline-none font-satoshi text-gray-darker">
                            Send
                        </button>
                    </div>

                    {status && <p className="text-xs text-gray-500 mt-2">{status}</p>}
                </div>
            </form >

            {/* MODALE TERMINI */}
            {/* {
                showTerms && (
                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                        <div className="dark:bg-black-custom bg-gray-lighter rounded-lg font-medium text-sm font-satoshi p-6 max-w-md w-full text-gray-darker dark:text-gray-darker">
                            <h3 className="font-semibold mb-2 text-black dark:text-custom-white">Privacy Terms</h3>
                            <p className="text-sm mb-4 lh-custom-119 text-gray-darker dark:text-gray-darker">
                                Your name and email will be stored securely for a maximum period of
                                <strong> 6 months</strong>.
                                The only purpose of this storage is to contact you back regarding your message.
                                Your data will not be shared with third parties and will be automatically deleted
                                after the retention period.
                            </p>

                            <button
                                onClick={() => setShowTerms(false)}
                                className="mt-2 w-full py-2 rounded-md  dhover:opacity-80 text-gray-darker bg-white dark:bg-black hover:bg-light-hover dark:hover:bg-dark-hover outline-none font-satoshi "
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )
            } */}
        </>
    );
}
