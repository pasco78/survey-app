import { useState } from 'react';

const SurveyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        department: '',
        email: '',
        usageFrequency: '',
        usagePurpose: [],
        interfaceRating: '',
        searchAccuracy: '',
        searchSpeed: '',
        usefulness: '',
        mostUsedFeature: '',
        additionalFeatures: '',
        issues: '',
        overallSatisfaction: '',
        additionalComments: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => {
                if (checked) {
                    return { ...prevState, [name]: [...prevState[name], value] };
                } else {
                    return { ...prevState, [name]: prevState[name].filter(item => item !== value) };
                }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // 여기에 폼 데이터를 서버로 전송하는 코드를 추가할 수 있습니다.
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>HERMES 사전 시스템 개발 의견 수렴 설문 조사</h1>

            <label>
                이름:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />

            <label>
                직위/직책:
                <input type="text" name="position" value={formData.position} onChange={handleChange} required />
            </label>
            <br />

            <label>
                소속 부서:
                <input type="text" name="department" value={formData.department} onChange={handleChange} required />
            </label>
            <br />

            <label>
                이메일:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />

            <label>
                사전 시스템을 얼마나 자주 사용하십니까?
                <select name="usageFrequency" value={formData.usageFrequency} onChange={handleChange} required>
                    <option value="">선택</option>
                    <option value="매일">매일</option>
                    <option value="매주">매주</option>
                    <option value="매월">매월</option>
                    <option value="거의 사용하지 않음">거의 사용하지 않음</option>
                </select>
            </label>
            <br />

            <label>
                사전 시스템을 주로 어떤 목적으로 사용하십니까? (중복 선택 가능)
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="usagePurpose"
                            value="단어 의미 확인"
                            checked={formData.usagePurpose.includes("단어 의미 확인")}
                            onChange={handleChange}
                        />
                        단어 의미 확인
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="usagePurpose"
                            value="동의어/반의어 검색"
                            checked={formData.usagePurpose.includes("동의어/반의어 검색")}
                            onChange={handleChange}
                        />
                        동의어/반의어 검색
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="usagePurpose"
                            value="발음 확인"
                            checked={formData.usagePurpose.includes("발음 확인")}
                            onChange={handleChange}
                        />
                        발음 확인
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="usagePurpose"
                            value="예문 검색"
                            checked={formData.usagePurpose.includes("예문 검색")}
                            onChange={handleChange}
                        />
                        예문 검색
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="usagePurpose"
                            value="기타"
                            checked={formData.usagePurpose.includes("기타")}
                            onChange={handleChange}
                        />
                        기타 (구체적으로 적어주세요)
                    </label>
                </div>
            </label>
            <br />

            <label>
                사전 시스템의 인터페이스는 얼마나 직관적이라고 느끼십니까?
                <select name="interfaceRating" value={formData.interfaceRating} onChange={handleChange} required>
                    <option value="">선택</option>
                    <option value="매우 직관적이다">매우 직관적이다</option>
                    <option value="직관적이다">직관적이다</option>
                    <option value="보통이다">보통이다</option>
                    <option value="직관적이지 않다">직관적이지 않다</option>
                    <option value="전혀 직관적이지 않다">전혀 직관적이지 않다</option>
                </select>
            </label>
            <br />

            <label>
                사전 시스템의 검색 기능은 얼마나 정확하다고 느끼십니까?
                <select name="searchAccuracy" value={formData.searchAccuracy} onChange={handleChange} required>
                    <option value="">선택</option>
                    <option value="매우 정확하다">매우 정확하다</option>
                    <option value="정확하다">정확하다</option>
                    <option value="보통이다">보통이다</option>
                    <option value="부정확하다">부정확하다</option>
                    <option value="매우 부정확하다">매우 부정확하다</option>
                </select>
            </label>
            <br />

            <label>
                사전 시스템의 검색 속도와 반응성에 대해 어떻게 평가하십니까?
                <select name="searchSpeed" value={formData.searchSpeed} onChange={handleChange} required>
                    <option value="">선택</option>
                    <option value="매우 빠르다">매우 빠르다</option>
                    <option value="빠르다">빠르다</option>
                    <option value="보통이다">보통이다</option>
                    <option value="느리다">느리다</option>
                    <option value="매우 느리다">매우 느리다</option>
                </select>
            </label>
            <br />

            <label>
                사전 시스템에서 제공되는 단어 설명과 예문은 얼마나 유용하다고 느끼십니까?
                <select name="usefulness" value={formData.usefulness} onChange={handleChange} required>
                    <option value="">선택</option>
                    <option value="매우 유용하다">매우 유용하다</option>
                    <option value="유용하다">유용하다</option>
                    <option value="보통이다">보통이다</option>
                    <option value="유용하지 않다">유용하지 않다</option>
                    <option value="전혀 유용하지 않다">전혀 유용하지 않다</option>
                </select>
            </label>
            <br />

            <label>
                현재 시스템에서 가장 많이 사용하는 기능은 무엇입니까?
                <input type="text" name="mostUsedFeature" value={formData.mostUsedFeature} onChange={handleChange} />
            </label>
            <br />

            <label>
                추가되었으면 하는 기능이 있습니까?
                <textarea name="additionalFeatures" value={formData.additionalFeatures} onChange={handleChange} />
            </label>
            <br />

            <label>
                사전 시스템 사용 중 불편했던 점이나 개선이 필요하다고 생각되는 부분이 있습니까?
                <textarea name="issues" value={formData.issues} onChange={handleChange} />
            </label>
            <br />

            <label>
                사전 시스템 전반에 대해 얼마나 만족하십니까?
                <select name="overallSatisfaction" value={formData.overallSatisfaction} onChange={handleChange} required>
                    <option value="">선택</option>
                    <option value="매우 만족한다">매우 만족한다</option>
                    <option value="만족한다">만족한다</option>
                    <option value="보통이다">보통이다</option>
                    <option value="불만족한다">불만족한다</option>
                    <option value="매우 불만족한다">매우 불만족한다</option>
                </select>
            </label>
            <br />

            <label>
                추가로 의견이 있으시면 자유롭게 적어주세요.
                <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
            </label>
            <br />

            <button type="submit">제출</button>
        </form>
    );
};

export default SurveyForm;
