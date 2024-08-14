// It's allows us to track state in a function component.
import React, { useState } from "react";
//  use it to wrap around elements that should trigger navigation
import { Link } from "react-router-dom";
//Use for End-Points: axios.GET,axios.POST,axios.PUT,axios.DELETE.
// It is used deal with database
import axios from "axios";

function ApplicationIot() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");

    //EVENT_handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/register", {
                name: name,
                email: email,
                phone: phone,
                address: address,
                pincode: pincode,
                city: city,
                state: state,
                message: message
            });
            alert("Form Submitted Successfully.....");
            setName("");
            setEmail("");
            setPhone("");
            setAddress("");
            setPincode("");
            setCity("");
            setState("");
            setMessage("");
        } catch (err) {
            console.error(err);
            alert("Something went Wrong!!");
        }
    };

    return (
        <div>
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>My Online IOT Products Shocasing</title>
                    {/* <line rel="stylesheet" href="App.css" /> */}
                    {/* <link rel="stylesheet" href="Style.css" /> */}
                    {/* <link rel="stylesheet" media="screen and (max-width: 1170px)" href="Phone.css" /> */}
                    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Bree+Serif&display=swap" rel="stylesheet" />
                </head>

                <body>
                    <var id="navbar">
                        <div id="logo">
                            <img src="../logo.png" alt="MyOnlineMeal.com" />
                        </div>
                        <ul>
                            <li class="item"><a href="#home">Home</a></li>
                            <li class="item"><a href="#services-container">Service</a></li>
                            <li class="item"><a href="#client-section">Our Clients</a></li>
                            <li class="item"><a href="#contact">Contact us</a></li>

                        </ul>
                    </var>

                    <section id="home">
                        <h1 class="h-primary">Welcome to My IOT Products service</h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vitae voluptatum quos minus quibusdam </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti </p> */}
                        {/* <button class="btn">Order Now</button> */}
                    </section>

                    <section id="services-container">
                        <h1 class="h-primary center">Our IOT Products</h1>
                        <p class="h-secondary center">For reducing the human effort and also make the process automated there are several types of IoT devices present in the market which are used daily. Some of them are mentioned below:</p>
                        <div id="services">
                            <div class="box">
                                <img src="p1.avif" alt="" />
                                <h2 class="h-secondary center">Product 1</h2>
                                <p class="center"><Link to="/product">Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things Development Board Cp2102 Iot</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                            <div class="box">
                                <img src="p3.avif" alt="" />
                                <h2 class="h-secondary center">Product 2</h2>
                                <p class="center"><Link to="/product2">Quad Store Wireless IOT Super Starter programming and development kit for NodeMCU ESP8266 compatible with arduino IDE</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                            <div class="box">
                                <img src="p2.avif" alt="" />
                                <h2 class="h-secondary center">Product 3</h2>
                                <p class="center"><Link to="/product3">Raspberry Pi 4 Model B 4Gb Ram Micro Controller Board for IOT Electronic Hobby Kit</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                        </div>
                        <div id="services1">
                            <div class="box">
                                <img src="p2.avif" alt="" />
                                <h2 class="h-secondary center">Product 4</h2>
                                <p class="center"><Link to="/product3">Raspberry Pi 4 Model B 4Gb Ram Micro Controller Board for IOT Electronic Hobby Kit</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                            <div class="box">
                                <img src="p1.avif" alt="" />
                                <h2 class="h-secondary center">Product 5</h2>
                                <p class="center"><Link to="/product">Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things Development Board Cp2102 Iot</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                            <div class="box">
                                <img src="p3.avif" alt="" />
                                <h2 class="h-secondary center">Product 6</h2>
                                <p class="center"><Link to="/product2">Quad Store Wireless IOT Super Starter programming and development kit for NodeMCU ESP8266 compatible with arduino IDE</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                        </div>
                        <div id="services2">
                            <div class="box">
                                <img src="p1.avif" alt="" />
                                <h2 class="h-secondary center">Product 7</h2>
                                <p class="center"><Link to="/product">Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things Development Board Cp2102 Iot</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                            <div class="box">
                                <img src="p3.avif" alt="" />
                                <h2 class="h-secondary center">Product 8</h2>
                                <p class="center"><Link to="/product2">Quad Store Wireless IOT Super Starter programming and development kit for NodeMCU ESP8266 compatible with arduino IDE</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                            <div class="box">
                                <img src="p2.avif" alt="" />
                                <h2 class="h-secondary center">Product 9</h2>
                                <p class="center"><Link to="/product3">Raspberry Pi 4 Model B 4Gb Ram Micro Controller Board for IOT Electronic Hobby Kit</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                        </div>
                        <div id="services3">
                            <div class="box">
                                <img src="p2.avif" alt="" />
                                <h2 class="h-secondary center">Product 10</h2>
                                <p class="center"><Link to="/product3">Raspberry Pi 4 Model B 4Gb Ram Micro Controller Board for IOT Electronic Hobby Kit</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                            <div class="box">
                                <img src="p3.avif" alt="" />
                                <h2 class="h-secondary center">Product 11</h2>
                                <p class="center"><Link to="/product2">Quad Store Wireless IOT Super Starter programming and development kit for NodeMCU ESP8266 compatible with arduino IDE</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                            <div class="box">
                                <img src="p1.avif" alt="" />/
                                <h2 class="h-secondary center">Product 12</h2>
                                <p class="center"><Link to="/product">Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things Development Board Cp2102 Iot</Link></p><br />
                                <p>Pattern Name: IOT Development Board<br />
                                    Brand	Generic<br />
                                    Model Name	ESP8266<br />
                                    Connectivity Technology	Wi-Fi, USB<br />
                                    Included Components	Generic ESP8266 Nodemcu Esp8266 Lua Amica Wifi Internet of Things <br />Development Board Cp2102 Iot<br />
                                    Wireless Communication Standard	802.11b</p><br />
                            </div>
                        </div>
                    </section>

                    <section id="client-section">
                        <h1 class="h-primary center">Our Clients</h1>
                        <div id="clients">
                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>
                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>

                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>
                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>
                        </div>
                        <div id="clients1">
                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>
                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>

                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>
                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>
                        </div>
                        <div id="clients2">
                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>
                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>

                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>
                            <div class="client-item">
                                <img src="logo.png" alt="Our Client" />
                            </div>
                        </div>
                    </section>

                    <section id="contact">
                        <h1 class="h-primary center">Contact Us</h1>
                        <div id="contact-box">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <label for="name">Name: </label>
                                    <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email: </label>
                                    <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone Number: </label>
                                    <input type="phone" placeholder="Enter your phone" onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="phone">Address: </label>
                                    <input type="text" placeholder="Enter your phone" onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="phone">Pin Code: </label>
                                    <input type="text" placeholder="Enter your phone" onChange={(e) => setPincode(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="phone">City: </label>
                                    <input type="text" placeholder="Enter your phone" onChange={(e) => setCity(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="phone">State: </label>
                                    <input type="text" placeholder="Enter your phone" onChange={(e) => setState(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="message">Message: </label>
                                    <textarea  cols="10" rows="2" onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                <button type="submit" class="btn">Submit</button>
                            </form>
                        </div>
                    </section>

                    <footer>
                        <div class="center">
                            Copyrignt &copy; www.MyIOTDevice.com
                        </div>
                    </footer>
                </body>
            </html>
        </div>
    );
}

export default ApplicationIot;
