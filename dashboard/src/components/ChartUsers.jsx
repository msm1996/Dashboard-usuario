import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ChartUsers({ data }) {
  return (
    <div style={{
      height: 300,
      background: "white",
      borderRadius: "10px",
      padding: "20px"
    }}>
      <h3 style={{ marginBottom: "20px" }}>
        📊 Distribuição de Níveis
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6c63ff" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartUsers;