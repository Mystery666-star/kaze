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
            
                
            >
                WATCH OUT THIS SPACE FOR MORE ACTION
            </h1>
        </div>
    );
};

export default AccessGranted;