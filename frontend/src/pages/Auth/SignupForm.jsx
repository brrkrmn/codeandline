import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { signupUser } from "../../reducers/userReducer";
import { signupFormInitialValues, signupSchema } from "./Auth.constants";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: signupFormInitialValues,
    validationSchema: signupSchema,
    onSubmit: values => {dispatch(signupUser(values))}
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center gap-4"
    >
      <CustomInput
        id="username"
        name="username"
        type="text"
        label={t('auth.form.usernameLabel')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        errorMessage={formik.touched?.username && formik.errors?.username}
      />
      <CustomInput
        id="email"
        name="email"
        type="email"
        label={t('auth.form.emailLabel')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        errorMessage={formik.touched?.email && formik.errors?.email}
      />
      <div className="flex flex-col gap-4 justify-between mobile:flex-row mobile:gap-2 w-full">
        <CustomInput
          id="password"
          name="password"
          type="password"
          label={t('auth.form.passwordLabel')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          errorMessage={formik.touched?.password && formik.errors?.password}
        />
        <CustomInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label={t('auth.form.confirmPasswordLabel')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          errorMessage={formik.touched?.confirmPassword && formik.errors?.confirmPassword}
        />
      </div>
      <CustomButton
        type="submit"
        className="w-52 mt-2"
      >
        {t('auth.form.submitLabel.signup')}
      </CustomButton>
    </form>
  )
}

export default SignupForm;