import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
`;

const LevelBadge = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 25px;
  font-weight: bold;
  color: white;

  background-color: ${({ level }) =>
    level === "Iniciante"
      ? "#4caf50"
      : level === "Intermediário"
      ? "#ff9800"
      : "#f44336"};
`;

function Card({ id, name, email, phone, company, level }) {
  const navigate = useNavigate();

  return (
    <Box onClick={() => navigate(`/user/${id}`, { state: { level } })}>
      <img
        src={`https://ui-avatars.com/api/?name=${name}`}
        alt={name}
        style={{ borderRadius: "50%", marginBottom: "10px" }}
      />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{company}</p>

      <LevelBadge level={level}>{level}</LevelBadge>
    </Box>
  );
}

export default Card;