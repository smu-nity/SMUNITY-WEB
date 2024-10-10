import Header from '../../components/Header'
import TabComponent from '../../components/qna/TabComponent'

const QuestionPage = () => {
  return (
    <>
      <Header
        title="Q&A 게시판"
        subtitle="상명대 졸업요건 검사 사이트"
        content="Q&A 게시판입니다."
      />
      <section className="cs_wrap">
        <TabComponent />
        <div className="login-container term-container">
          <div className="container">
            <div className="info_box_wrapper"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default QuestionPage
