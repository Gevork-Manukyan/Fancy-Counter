export default function Title({ limitReached }) {
  return (
    <h1 className="title">
      {limitReached ? "LIMIT REACHED" : "Fancy Counter"}
    </h1>
  );
}
