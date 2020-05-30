const Button = (props) => {
  return (
    <button
      {...props}
      css={{
        padding: '2 3',
        borderStyle: 'none',
        borderRadius: 3,
        fontSize: 1,
      }}
    />
  );
};

export default Button;
