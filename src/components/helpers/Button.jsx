const Button = ({ name, link, classes }) => {
  return (
    <li>
      <a href={link} className={classes}>
        {name}
      </a>
    </li>
  );
};

export default Button;
