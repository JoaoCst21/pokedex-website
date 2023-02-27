const Stats = ({ name, base_stat }) => {
  return (
    <>
      <div className="stat" key={name}>
        <div className="stat-name">{name}</div>
        <div
          style={{ "--stat-value": base_stat + "%" }}
          className="stat-loader"
        ></div>
        <div className="stat-base">{base_stat}</div>
      </div>
    </>
  );
};

export default Stats;
