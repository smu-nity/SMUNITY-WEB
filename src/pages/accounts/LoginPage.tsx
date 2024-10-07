import Header from '../../components/Header'
import LoginForm from '../../components/accounts/LoginForm'

const LoginPage = () => {
  return (
    <>
      <Header title="로그인" subtitle="학번과 스뮤니티 비밀번호를 입력해 주세요." />
      <div className="login-container">
        <LoginForm />
      </div>
    </>
  )
}

export default LoginPage
