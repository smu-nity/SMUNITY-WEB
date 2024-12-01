import {useState} from 'react'
import useCustomMypage, {TCustomMypage} from '../../hooks/useCustomMypage'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'

interface PasswordCredentials {
  password1: string
  password2: string
}

const ChangePasswordFrom = () => {
  const {passwordChange}: TCustomMypage = useCustomMypage()
  const {doLogout}: TCustomAccount = useCustomAccount()
  const [passwordParams, setPasswordParams] = useState<PasswordCredentials>({
    password1: '',
    password2: ''
  })

  const requestParam = () => {
    const {password1: password} = passwordParams
    return {password}
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setPasswordParams(prevParams => ({...prevParams, [name]: value}))
  }

  const handleClick = () => {
    passwordParams.password1 && passwordParams.password2
      ? passwordParams.password1 === passwordParams.password2
        ? passwordChange(requestParam()).then(success => {
            if (success) {
              alert('비밀번호가 변경되었습니다.')
              doLogout()
            }
          })
        : alert('비밀번호가 일치하지 않습니다.')
      : alert('비밀번호를 입력해주세요.')
  }

  return (
    <>
      <div className="form-login">
        <div className="input-group flex-nowrap">
          <input
            className="form-control"
            type="password"
            name="password1"
            placeholder="새 비밀번호"
            onChange={handleChange}
          />
        </div>
        <div className="input-group flex-nowrap" style={{marginTop: '1rem'}}>
          <input
            className="form-control"
            type="password"
            name="password2"
            placeholder="비밀번호 재확인"
            onChange={handleChange}
          />
        </div>
      </div>
      <input
        type="submit"
        className="btn btn-primary button-sm"
        value="변경하기"
        onClick={handleClick}
      />
    </>
  )
}

export default ChangePasswordFrom
