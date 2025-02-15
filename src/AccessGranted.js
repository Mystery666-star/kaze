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
            {/* PNG Image */}
            <img 
                src="/Kaze.png" 
                alt="Background" 
                style={{
                    maxWidth: "80vw", // Ensures it scales properly
                    maxHeight: "60vh",
                    objectFit: "contain"
                }} 
            />

            {/* GIF Image Positioned Over PNG */}
            <img 
                src="/comingsoon.gif" 
                alt="Coming Soon" 
                style={{
                    position: "absolute",
                    width: "50%", // Adjusted for mobile
                    maxWidth: "250px",
                    maxHeight: "25vh",
                    top: "50%", 
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }} 
            />

            {/* Watch Out Text */}
            <h1 
                style={{
                    position: "absolute",
                    bottom: "5%", // Adjusted for better alignment on mobile
                    fontSize: "4vw", // Dynamic font size
                    fontWeight: "bold",
                    color: "#ffcc00",
                    textShadow: "3px 3px 10px rgba(255, 255, 255, 0.8)",
                    letterSpacing: "2px",
                    textAlign: "center",
                    width: "60%",
                    whiteSpace: "normal", // Allows wrapping on small screens
                    margin: "0 auto", // Center the text
                    animation: "pulseText 1.5s infinite alternate"
                }}
            >
                WATCH OUT THIS SPACE FOR MORE ACTION
            </h1>
        </div>
    );
};

export default AccessGranted;