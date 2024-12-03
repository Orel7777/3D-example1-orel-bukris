import React, { useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    position: "relative",
    zIndex: 50,
    cursor: "pointer",
    width: "100%",
    maxWidth: "20rem",
    margin: "0 auto",
  };

  const contentStyle = {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    borderRadius: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: isHovered
      ? "1px solid rgba(255, 255, 255, 0.3)"
      : "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    transition: "all 700ms",
    overflow: "hidden",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  const titleStyle = {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 500ms",
  };

  const titleLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.125rem 1rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "9999px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  };

  const titleTextStyle = {
    color: "white",
    fontSize: "0.75rem",
    fontWeight: "bold",
    padding: "0.125rem 0",
  };

  return (
    <div
      className={cn(containerClassName)}
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <a href={href || "/"} style={{ textDecoration: "none" }}>
        <div style={contentStyle}>
          <div className={cn(className)}>{children}</div>
        </div>
        <div style={titleStyle}>
          <div style={titleLinkStyle}>
            <span style={titleTextStyle}>{title}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PinContainer;
