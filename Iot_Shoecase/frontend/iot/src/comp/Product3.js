import React from "react";

function Product3() {
    return (
        <div class="box">
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Product 3 - Detailed Information</title>
                    <link rel="stylesheet" href="styles.css" />
                </head>
                <body>
                    <div class="product-container">
                        <div class="product-header">
                            <h1>Product 3 - Raspberry Pi 4 Model B</h1>
                            <img src="p2.avif" alt="Product Image" />
                        </div>

                        <div class="product-section">
                            <h2>Overview</h2>
                            <div class="product-specs">
                                <h5>The Raspberry Pi is a series of small, affordable, and versatile single-board computers developed by the Raspberry Pi Foundation.
                                    Designed to promote computing education and encourage experimentation, the Raspberry Pi has become a popular platform for hobbyists, educators, and professionals alike.
                                    The Raspberry Pi is a credit-card-sized computer that packs a range of features into a compact form factor.
                                    It is designed to be a cost-effective tool for learning programming, electronics, and digital making.
                                    The board provides sufficient processing power and connectivity for a variety of applications, from basic computing to complex projects.
                                </h5>
                            </div>
                        </div>

                        <div class="product-section">
                            <h2>Detailed Specifications</h2>
                            <div class="product-specs">
                                <p><strong>Processor:</strong> Broadcom BCM2711 quad-core ARM Cortex-A72 @ 1.5GHz</p>
                                <p><strong>Memory:</strong> 2GB, 4GB, or 8GB LPDDR4 RAM</p>
                                <p><strong>Operating Voltage:</strong> 5V DC via USB-C</p>
                                <p><strong>Connectivity Options:</strong> Gigabit Ethernet, Wi-Fi 802.11ac, Bluetooth 5.0</p>
                                <p><strong>Input/Output Ports:</strong> 40 GPIO, 2 USB 3.0, 2 USB 2.0, HDMI 2.0, MIPI DSI, MIPI CSI</p>
                                <p><strong>Power Consumption:</strong> Approx. 600mA to 1.2A depending on usage</p>
                                <p><strong>Operating Temperature:</strong> 0°C to +50°C</p>
                                <p><strong>Dimensions:</strong> 85.6mm x 56.5mm x 21mm</p>
                            </div>
                        </div>

                        <div class="product-section">
                            <h2>Features</h2>
                            <p><strong>High-Performance:</strong> Quad-core ARM Cortex-A72 processor delivers substantial improvements in performance for demanding applications.</p>
                            <p><strong>Enhanced Connectivity:</strong> Features Gigabit Ethernet, dual-band Wi-Fi, and Bluetooth 5.0 for reliable and fast connectivity.</p>
                            <p><strong>Multi-Monitor Support:</strong> Dual HDMI ports allow for dual 4K display output for advanced graphical applications.</p>
                            <p><strong>Expandable Memory:</strong> Supports external storage via USB and microSD card for additional flexibility.</p>
                        </div>

                        <div class="product-section">
                            <h2>Applications</h2>
                            <div class="product-specs">
                                <p><strong>Educational Use:</strong> The Raspberry Pi is widely used in educational settings to teach programming, computer science, and electronics.</p>
                                <p><strong>Media Center:</strong> Can be used to create a media center for streaming videos, music, and other digital content to connected displays.</p>
                                <p><strong>Home Automation:</strong> Ideal for building smart home systems, including automation of lighting, heating, and security devices.</p>
                                <p><strong>IoT Projects:</strong> Perfect for Internet of Things (IoT) applications, including data logging, remote sensors, and cloud-based solutions.</p>
                                <p><strong>Retro Gaming:</strong> Supports retro gaming emulation for playing classic video games on modern displays.</p>
                            </div>
                        </div>

                        <div class="product-section">
                            <h2>Benefits</h2>
                            <div class="product-specs">
                                <p><strong>High Performance:</strong> The Raspberry Pi 4 offers significant performance improvements over previous models, suitable for more demanding tasks.</p>
                                <p><strong>Versatile Connectivity:</strong> With multiple connectivity options, it provides extensive flexibility for connecting peripherals and networks.</p>
                                <p><strong>Active Community:</strong> A large and vibrant community provides extensive support, including tutorials, forums, and project ideas.</p>
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
                            <p>"Excellent performance for its price!" - User A</p>
                            <p>"Great for learning and prototyping." - User B</p>
                        </div>
                    </div>
                </body>
            </html>
        </div>
    );
}

export default Product3;
