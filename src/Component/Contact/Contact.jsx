import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {


        e.preventDefault();

        emailjs
            .sendForm('service_gh39o25', 'template_t3p6dgi', form.current, {
                publicKey: 'gUtP8qGY3XZu6NUe-',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div id='contacts' className='mb-8'>
            <div>
                <h3 className='flex justify-center mb-8'>Contact With me</h3>
            </div>
            <div className='flex gap-5 w-full '>
                <div className="w-full md:w-1/2 pl-20 mt-8 md:mt-0">
                    <h1 className="text-lg font-semibold text-gray-900">Email</h1>
                    <p className="text-gray-700">imranhasan020202@gmail.com</p>
                    <h1 className="text-lg font-semibold text-gray-900 mt-4">Phone</h1>
                    <p className="text-gray-700">01646922616</p>
                    <h1 className="text-lg font-semibold text-gray-900 mt-4">Address</h1>
                    <p className="text-gray-700">Sherpur, Mymensingh</p>
                </div>
                <div className='w-1/2'>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your name"
                                required
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your email"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                placeholder="Your message"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                rows="4"
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Send"
                                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            />
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Contact;