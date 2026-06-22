import Map from "../components/Map";

function RequestRide() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Solicitar Viaje</h1>

      <Map />

      <br />

      <input
        type="text"
        placeholder="Origen"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        placeholder="Destino"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button>
        Solicitar Viaje
      </button>
    </div>
  );
}

export default RequestRide;