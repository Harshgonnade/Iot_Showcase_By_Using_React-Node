import React from "react";

function Product() {
    return (
        <div>
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <title>Product 2 - Detailed Information</title>
                        <link rel="stylesheet" href="Styles.css" alt="Product Image"/>
                    </head>
                        <body>
                            <div class="product-container">
                                <div class="Product-header">
                                    <h1>Product 1 - ESP8266 IoT Development Board</h1>
                                    <img src="p1.avif" alt="" />
                                </div>

                                <div class="Product-section">
                                    <h2>Overview</h2>
                                    <div class="product-specs">
                                        <h5>The ESP8266 IoT Development Board is a powerful, versatile, and cost-effective platform designed for building Internet of Things (IoT) applications.
                                            It integrates a Wi-Fi module and microcontroller into a single board, offering a comprehensive solution for wireless communication and control.
                                            The ESP8266 Development Board is built around the ESP8266 chip, a highly integrated Wi-Fi SoC (System on Chip) developed by Espressif Systems.
                                            It’s popular among hobbyists and professionals alike due to its affordability, ease of use, and extensive community support.
                                        </h5>
                                    </div>
                                </div>

                                <div class="product-section">
                                    <h2>Detailed Specifications</h2>
                                    <div class="product-specs">
                                        <p><strong>Microcontroller/Processor:</strong> ESP8266 @ 80/160MHz</p>
                                        <p><strong>Memory:</strong> 32KB RAM, 4MB Flash</p>
                                        <p><strong>Operating Voltage:</strong> 3.3V</p>
                                        <p><strong>Connectivity Options:</strong> Wi-Fi 802.11 b/g/n</p>
                                        <p><strong>Input/Output Ports:</strong> 17 GPIO, 1 ADC, UART, I2C, SPI</p>
                                        <p><strong>Power Consumption:</strong> 70mA in active mode</p>
                                        <p><strong>Operating Temperature:</strong> -40°C to +125°C</p>
                                        <p><strong>Dimensions:</strong> 24mm x 16mm x 3mm</p>
                                    </div>
                                </div>

                                <div class="product-section">
                                    <h2>Features</h2>
                                    <p><strong>Security Features:</strong> WPA/WPA2 encryption</p>
                                    <p><strong>Firmware Update Options:</strong> OTA updates supported</p>
                                    <p><strong>Compatible Software:</strong> Arduino, MicroPython, NodeMCU</p>
                                    <p><strong>Battery Support:</strong> Supports 3.7V LiPo battery</p>
                                </div>

                                <div class="product-section">
                                    <h2>Applications</h2>
                                    <div class="product-specs">
                                        <p><strong>Home Automation:</strong> The ESP8266 is ideal for creating smart home devices, such as automated lighting, smart thermostats, and security systems.</p>
                                        <p><strong>Remote Monitoring:</strong> It can be used to build systems for monitoring environmental conditions (temperature, humidity, air quality) and sending data to a cloud server.</p>
                                        <p><strong>Wireless Control:</strong> The board enables the creation of wireless remote controls for appliances and machinery, providing a convenient way to manage devices over a network.</p>
                                        <p><strong>IoT Projects:</strong> With its network connectivity, the ESP8266 is a popular choice for various IoT projects, including data logging, remote sensors, and cloud-based applications.</p>
                                    </div>
                                </div>

                                <div class="product-section">
                                    <h2>Benefits</h2>
                                    <div class="product-specs">
                                        <p><strong>Cost-Effective:</strong> The ESP8266 offers a low-cost solution for adding Wi-Fi capabilities to projects, making it accessible for both hobbyists and professionals.</p>
                                        <p><strong>Ease of Use:</strong> Its compatibility with popular development platforms and comprehensive documentation make it easy to get started and develop complex applications.</p>
                                        <p><strong>Community Support:</strong> A large and active community provides extensive resources, including tutorials, libraries, and forums, which facilitate problem-solving and innovation.</p>
                                    </div>
                                </div>

                                <div class="product-section">
                                    <h2>User Manual & Documentation</h2>
                                    <p><a href="path/to/user-manual.pdf">Download User Manual</a></p>
                                    <p><a href="path/to/programming-guide.pdf">Download Programming Guide</a></p>
                                </div>

                                <div class="product-section">
                                    <h2>Certifications</h2>
                                    <p><strong>Compliance:</strong> CE, FCC, RoHS</p>
                                    <p><strong>Safety Standards:</strong> EN 60950-1</p>
                                </div>

                                <div class="product-section">
                                    <h2>Support & Warranty</h2>
                                    <p><strong>Customer Support:</strong> support@example.com</p>
                                    <p><strong>Warranty Information:</strong> 1 year warranty</p>
                                </div>

                                <div class="product-section">
                                    <h2>Product Reviews</h2>
                                    <p>"Great development board for IoT projects!" - User A</p>
                                    <p>"Easy to use and well-documented." - User B</p>
                                </div>
                            </div>
                        </body>
                    </html>
                </div>
                );
}

                export default Product;
