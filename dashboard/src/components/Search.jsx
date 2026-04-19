import styled from "styled-components";

const Input = styled.input`
  width: 98%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 18px;

  &:focus {
    border-color: #6c63ff;
  }
`;

function Search({ setSearch }) {
  return (
    <Input placeholder="Buscar usuário..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;