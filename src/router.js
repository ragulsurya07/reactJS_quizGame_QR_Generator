import {BrowserRouter as  Router, Routes, Route, Link} from 'react-router-dom';
import QuizGame from './quiz_game';
import './quiz_game.css';
import QRgenerator from './QR_generator';

function Logo(){
    return (

        <div className='quiz_game'>
            <Router>
                <div className='icon'>
                <Link to ="/quizz_game"><img alt='logo' src='https://media.istockphoto.com/vectors/quiz-with-question-mark-sign-icon-questions-and-answers-game-symbol-vector-id1257642837?k=20&m=1257642837&s=170667a&w=0&h=AAJeGsh5uyvNSgP8hfVFrbp0LyASWBzrkc2QrbhG2cw='></img></Link><h5>Quiz game</h5>
                <Link to ="/QR_generator"><img alt='QR_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4_BhbtblGk_pa6Cq_qM-lYlBMfuIaACELA&usqp=CAU'></img></Link><h5>QR Generator</h5>
                </div>
                <Routes>
                    <Route path='/quizz_game' element={<QuizGame/>} />
                    <Route path='/QR_generator' element={<QRgenerator/>} />
                </Routes>
            </Router>
        </div>

    )
}

export default Logo;