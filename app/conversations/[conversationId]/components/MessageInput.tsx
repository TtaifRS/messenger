'use client'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface MessageInputProps {
	id: string
	required: boolean
	register: UseFormRegister<FieldValues>
	errors: FieldErrors
	placeholder?: string
	type?: string
}

const MessageInput: React.FC<MessageInputProps> = ({
	id,
	required,
	type,
	register,
	errors,
	placeholder,
}) => {
	return (
		<div className="relative w-full">
			<input
				type={type}
				id={id}
				autoComplete={id}
				{...register(id, { required })}
				placeholder={placeholder}
				className="
        text-black
        font-light
        py-2
        px-4
        bg-neutral-100
        w-full
        rounded-full
        focus:outline-none
      "
			/>
		</div>
	)
}

export default MessageInput
