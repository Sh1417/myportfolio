
import { TbLetterF, TbLetterH, TbLetterI, TbLetterL, TbLetterO, TbLetterP, TbLetterR, TbLetterT} from "react-icons/tb";
import { TbLetterS } from "react-icons/tb";
const Logo = ({ size = 30 }) => {
    return (
        <div className='flex'>
            {/* <img src={Logo} alt="My-Logo" /> */}
            <TbLetterP size={size} />
            <TbLetterO size={size} />
            <TbLetterR size={size} />
            <TbLetterT size={size} />
            <TbLetterF size={size} />
            <TbLetterO size={size} />
            <TbLetterL size={size} />
            <TbLetterI size={size} />
            <TbLetterO size={size} />
        </div>
    )
}

export default Logo