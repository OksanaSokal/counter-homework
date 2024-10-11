import s from './style.module.css'

type ButtonType = {
    title: string
    onClick: () => void
    className?: string
    disabled?: boolean
}

export const Button = ({title, onClick, className, disabled}: ButtonType)  => {
    return (
        <button className={disabled ? `${className} ${s.disabled}` : className} onClick={onClick} disabled={disabled}>{title}</button>
    );
};

