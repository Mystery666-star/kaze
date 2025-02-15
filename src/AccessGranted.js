const AccessGranted = () => {
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",
                width: "100vw",
                backgroundColor: "black",
                overflow: "hidden",
                textAlign: "center"
            }}
        >
            <img
                src="/Kaze.png"
                alt="Background"
                style={{
                    maxWidth: "80vw",
                    maxHeight: "60vh",
                    objectFit: "contain"
                }}
            />

            <img
                src="/comingsoon.gif"
                alt="Coming Soon"
                style={{
                    position: "absolute",
                    width: "50%",
                    maxWidth: "250px",
                    maxHeight: "25vh",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            />

            <h1
                style={{
                    position: "absolute",
                    bottom: "20px", // Use a fixed pixel value for better control
                    fontSize: "min(6vw, 24px)", // Use min() to cap the font size
                    fontWeight: "bold",
                    color: "#ffcc00",
                    textShadow: "3px 3px 10px rgba(255, 255, 255, 0.8)",
                    letterSpacing: "2px",
                    textAlign: "center",
                    width: "90%", // Keep the percentage width
                    margin: "0 auto",
                    whiteSpace: "normal",
                    animation: "pulseText 1.5s infinite alternate"
                }}
            >
                WATCH OUT THIS SPACE FOR MORE ACTION
            </h1>
        </div>
    );
};

export default AccessGranted;