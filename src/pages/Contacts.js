const Contacts = () => {
    return ( 
            <main class="section">
                <div class="container">
                        <h1 class="title-1">Contacts</h1>

                        <ul class="content-list">
                            <li class="content-list__item">
                                <h2 class="title-2">Location</h2>
                                <p>Moscow, Russia</p>
                            </li>
                            <li class="content-list__item">
                                <h2 class="title-2">Telegram / WhatsApp</h2>
                                <p><a href="tel:+79051234567">+7 (905) 123-45-67</a></p>
                            </li>
                            <li class="content-list__item">
                                <h2 class="title-2">Email</h2>
                                <p><a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a></p>
                            </li>
                        </ul>

                </div>
            </main>
     );
}
 
export default Contacts;