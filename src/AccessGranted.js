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
                textAlign: "center",
                padding: "5vw",
                boxSizing: "border-box",
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
                    width: "min(50vw, 250px)", // Fully responsive
                    maxHeight: "25vh",
                    top: "55%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            />

            <h1
                style={{
                    fontSize: "min(6vw, 24px)",
                    fontWeight: "bold",
                    color: "#ffcc00",
                    textShadow: "3px 3px 10px rgba(255, 255, 255, 0.8)",
                    letterSpacing: "2px",
                    textAlign: "center",
                    width: "90%",
                    marginTop: "10vh",
                    animation: "pulseText 1.5s infinite alternate"
                }}
            >
                WATCH THIS SPACE FOR MORE ACTION
            </h1>
        </div>
    );
};

export default AccessGranted;
