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
                textAlign: "center" // Ensures everything is properly centered
            }}
        >
            {/* PNG Image */}
            <img 
                src="/Kaze.png" 
                alt="Background" 
                style={{
                    maxWidth: "90%", // Ensures it fits smaller screens
                    maxHeight: "70vh",
                    objectFit: "contain"
                }} 
            />

            {/* GIF Image Positioned Over PNG */}
            <img 
                src="/comingsoon.gif" 
                alt="Coming Soon" 
                style={{
                    position: "absolute",
                    width: "35%", // Adjusted for better scaling
                    maxWidth: "300px",
                    maxHeight: "30vh",
                    top: "55%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }} 
            />

            {/* Watch Out Text */}
            <h1 
                style={{
                    position: "absolute",
                    bottom: "5%", // Positioned a bit higher for mobile
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#ffcc00",
                    textShadow: "3px 3px 10px rgba(255, 255, 255, 0.8)",
                    letterSpacing: "2px",
                    textAlign: "center",
                    width: "90%", // Ensures it doesn't overflow on mobile
                    animation: "pulseText 1.5s infinite alternate"
                }}
            >
                WATCH OUT THIS SPACE FOR MORE ACTION
            </h1>
        </div>
    );
};

export default AccessGranted;
