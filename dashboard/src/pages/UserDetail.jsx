import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #10447b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  gap: 40px;
  background: #6c63ff;
  padding: 40px;
  border-radius: 16px;
  width: 700px;
`;

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const level = location.state?.level;

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);

  if (!user) return <p>Carregando...</p>;

  return (
    <Container>
      <Card>
        <div>
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}`}
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <h2 style={{ color: "white" }}>{user.name}</h2>

          <p
            style={{
              color:
                level === "Iniciante"
                  ? "#4caf50"
                  : level === "Intermediário"
                    ? "#ff9800"
                    : "#f44336",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            {level}
          </p>
        </div>

        <div style={{
          gap: "50px", color: "white",
          fontSize: "25px",
          display: "flex",
          marginTop: "50px",
          alignItems: "center",


        }}>
          <p>Email: {user.email}</p>
          <p>Telefone: {user.phone}</p>

          <button onClick={() => navigate("/")} style={{
            fontSize: "18px", padding: "10px 20px",
            borderRadius: "8px",
            border: "none", background: "#f44336",
            color: "white", cursor: "pointer",
            height: "60px", alignSelf: "center"

          }}>
            ← Voltar
          </button>
        </div>
      </Card>
    </Container>
  );
}

export default UserDetail;