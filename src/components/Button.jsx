const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex py-4 px-7 border justify-center items-center font-montserrat leading-none
      ${backgroundColor 
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : 'bg-coral-red text-white border-coral-red'
      } rounded-full ${fullWidth && 'w-full'}`}>
      {label}
      {iconURL && (
        <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="icon" />
      )}
    </button>
  );
};

export default Button;