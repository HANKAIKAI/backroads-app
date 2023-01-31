const SocialLink = ({href, icon, itemClass}) => {
  return (
    <li>
      <a href={href} rel="noopener" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
    
  );
}
export default SocialLink