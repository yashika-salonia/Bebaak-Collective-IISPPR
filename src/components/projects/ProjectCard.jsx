import React from "react";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
  const { title, description, image } = project; // only the fields we still use

  return (
    <StyledWrapper>
      <div className="card">
        {/* Image */}
        <div className="image-container">
          <img src={image} alt={title} className="project-image" />
        </div>

        {/* Text */}
        <div className="text-content">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 420px;
    background: #171717;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0px 0px 3px 1px #00000088;
    cursor: pointer;
  }

  /* ——— Image ——— */
  .image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .card:hover .project-image {
    transform: scale(1.1);
  }

  /* ——— Text ——— */
  .text-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: white;
  }
  .description {
    font-size: 0.875rem;
    color: #a3a3a3;
    line-height: 1.5;
    overflow-y: auto; /* scroll if very long */
  }

  /* hover glow (kept) */
  .content::before,
  .card::before,
  .card::after {
    pointer-events: none;
  }
  .card::before {
  display: none;
    opacity: 0;
    content: "";
    position: absolute;
    width: 80px;
    height: 360px;
    background: linear-gradient(#4ade80, #22c55e);
    animation: spin 8s linear infinite paused;
    transition: opacity 300ms;
  }
  .card:hover::before {
    opacity: 1;
    animation-play-state: running;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default ProjectCard;
