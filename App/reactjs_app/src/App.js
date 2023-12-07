import React, {useState} from 'react';
import img from './assets/diabetes-1024x367.jpg'
import axios from "axios";

const App = () => {
    const [fn, set_fn] = useState('');
    const [gen, set_gen] = useState('');
    const [prag, set_prag] = useState(0);
    const [gol, set_gol] = useState(0);
    const [bp, set_bp] = useState(0);
    const [th, set_th] = useState(0);
    const [an, set_an] = useState(0);
    const [bmi, set_bmi] = useState(0);
    const [dpf, set_dpf] = useState(0);
    const [age, set_age] = useState(0);

    const [result, setResult] = useState();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            fn: fn,
            gen: gen,
            prag: prag,
            gol: gol,
            bp: bp,
            th: th,
            an: an,
            bmi: bmi,
            dpf: dpf,
            age: age
        }
        const response = await axios.post('http://127.0.0.1:8000/api/', JSON.stringify(data), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (response) {
            if (response.status === 200) {
                // console.log(response.data['diabet'])
                setResult(response.data['diabet']);
            }
            console.log(response)
        }
    }

    return (
        <>
            <div className='container my-3'>
                <img className='w-100 rounded-3' style={{height: '200px'}} src={img} alt="logo"/>
                <h1 className="display-4">
                    برنامه تشخیص بیماری دیابت
                </h1>
                <h3 className='text-danger'>با استفاده از الگوریتم های یادگیری ماشین</h3>
                <hr/>
                {result !== undefined ? (
                    <p className={`alert ${result ? 'alert-danger' : 'alert-warning'} text-center`}>
                        نتیجه: کاربر {fn}{' '}
                        بیماری دیابت {' '}
                        {result ? (<span>دارد</span>) : (<span>ندارد</span>)}
                    </p>
                ) : null}

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label small">نام کامل</label>
                                <input
                                    value={fn}
                                    onChange={e => set_fn(e.target.value)}
                                    required
                                    type="text"
                                    className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small">جنسیت</label>
                                <select required
                                        value={gen}
                                        onChange={e => set_gen(e.target.value)}
                                        ame="gen"
                                        className="form-control">
                                    <option value="male">مذکر</option>
                                    <option value="female">مونث</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small">بارداری: تعداد دفعات بارداری</label>
                                <input required
                                       value={prag}
                                       onChange={e => set_prag(e.target.value)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small"
                                >گلوکز: غلظت گلوکز پلاسما 2 ساعت در آزمایش تحمل گلوکز
                                    خوراکی</label
                                >
                                <input required
                                       value={gol}
                                       onChange={e => set_gol(e.target.value)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small"
                                >فشار خون: فشار خون دیاستولیک (میلی متر جیوه)</label
                                >
                                <input required
                                       value={bp}
                                       onChange={e => set_bp(e.target.value)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label small"
                                >ضخامت پوست: ضخامت چین های پوستی سه سر بازو (میلی متر)</label
                                >
                                <input required
                                       value={th}
                                       onChange={e => set_th(e.target.value)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small"
                                >انسولین: انسولین سرم 2 ساعته (mu U/ml)</label
                                >
                                <input required
                                       value={an}
                                       onChange={e => set_an(e.target.value)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small"
                                >BMI : شاخص توده بدنی (وزن بر حسب کیلوگرم/(قد بر حسب
                                    متر)^2)</label
                                >
                                <input required
                                       value={bmi}
                                       onChange={e => set_bmi(e.target.value)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small"
                                >DiabetesPedigreeFunction : عملکرد شجره نامه دیابت
                                </label>
                                <input required
                                       value={dpf}
                                       onChange={e => set_dpf(e.target.value)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small">سن: سن (سال)</label>
                                <input required
                                       value={age}
                                       onChange={e => set_age(e.target.value)}
                                       type="text"
                                       className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit"
                            className="btn btn-success w-100">تشخیص
                    </button>
                </form>
            </div>
        </>
    )
}

export default App;