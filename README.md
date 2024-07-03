<p align="center">

  <h3 align="center">Web Worker Demonstration</h3>

  <p align="center">
    Simple demo for multithreading in browser with Web Workers
    <br />
    <br />
    <br />
  </p>
</p>

## Examples with UI Blocking and NoN Blocking Due Heavy Process

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#running-locally">Running locally</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The intention is to demonstrate two practical examples of heavy operations, where one will freeze the user's browser screen and the other will not due to the calculation process that will be carried out in a separate thread from the browser's main thread.

- WihoutWorker: (folder)
  - This example, we have a button that, when clicked, performs a recursive Fibonacci calculation for n provided amount. This type of design is intentionally cumbersome and can crash an interface, making the page unresponsive until the project is completed.
    <br />
- WithWorker (folder):
  - In this example, we modified the code to use a Web Worker to calculate Fibonacci in a separate thread. When clicking the "Calculate Fibonacci (Web Worker)" button, the calculation is initiated in the Web Worker, keeping the interface responsive and allowing the user to continue interacting with the page while the calculation is performed in the background.

<br >

<!-- Running Locally -->

## Running Locally

This is a very simple project, which was distributed to be tested quickly and easily in order to test the concept.

### Prerequisites

- To make it run nicely have installed in your machine

* Git
* Google Chrome
* VsCode
* LiveServer or other similar extension

## Getting Started

1 - Clone the Repo:
HTTPS:

```bash
git clone https://github.com/levi-sr93/WebWorker_Simple_Implementation.git
```

SSH:

```bash
git clone git@github.com:levi-sr93/WebWorker_Simple_Implementation.git
```

2 - Make sure to be in the project root folder

```bash
cd WithoutWorker
```

3 - Run with Live Server in the index.html ( Or any other Development Server for static or dynamic pages)

<!-- CONTRIBUTING -->

## Contributing

If you want to contribute follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[Website](https://levisantos.com)
Levi Santos - contact@levisantos.com | contactlevi93@gmail.com
