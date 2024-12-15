import {useState} from 'react'
import Modal from '../Modal'
import TargetTable from './TargetTable'

const TermsComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <>
      <div className="info_box">
        <div className="info_content">
          <p>1. 현재 검사 가능한 학과는 다음과 같습니다.</p>
          <p style={{marginLeft: '1rem', fontSize: '0.85rem'}}>
            - 검사대상: &nbsp;
            <a
              className="link_site"
              style={{cursor: 'pointer'}}
              onClick={() => setIsOpenModal(true)}>
              검사대상표
            </a>
          </p>
          <p>
            2. 편입생, 교직이수, 다전공, 외국인유학생 입학자에 해당하는 사용자는 검사
            기준이 따로 설정되지 않습니다.
          </p>
          <p>
            3. 추천 과목 정보는 <b>2024학년도 2학기</b> 정보를 기준으로 합니다.
          </p>
          <p>
            4. 검사 기준은 <b>2024학년도 2학기</b> 교육과정으로 기준으로 합니다.
          </p>
          <p style={{marginLeft: '1rem', fontSize: '0.85rem'}}>
            - 상명대학교 교육과정:
            <a
              className="link_site"
              target="_blank"
              href="https://www.smu.ac.kr/kor/life/curriculum.do"
              style={{marginLeft: '0.3rem'}}
              rel="noreferrer">
              전공
            </a>
            <a
              className="link_site"
              target="_blank"
              href="https://www.smu.ac.kr/smgs/curriculum/culture1.do"
              style={{marginLeft: '0.3rem'}}
              rel="noreferrer">
              교양
            </a>
          </p>
          <p>
            5. 사용자의 상명대학교 포털 사이트의 비밀번호는 재학생 인증과 기이수과목
            업데이트에만 사용되며 <b>저장되지 않습니다.</b>
          </p>
          <p>
            6. 상명대학교에서 공식적으로 만든 사이트가 아니므로
            <b className="margin-l3">검사 결과가 정확하지 않을 수 있습니다.</b>
          </p>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        icon="fa-check-circle"
        onClose={() => setIsOpenModal(false)}
        title={'검사대상표'}
        explanation={'아래 표에 해당하는 학과만 회원가입 가능합니다.'}
        children={<TargetTable />}
      />
    </>
  )
}

export default TermsComponent
