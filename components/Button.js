function Button(props) {
  return (
    <button
      {...props}
      css={{
        padding: "2 3",
        borderStyle: "none",
        borderRadius: 3,
        fontSize: 1,
        backgroundColor: "indigo.700",
        color: "white",
      }}
    />
  );
}

export default Button;
