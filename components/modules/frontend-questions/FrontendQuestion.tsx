import Link from 'next/link';

const FrontendQuestion = ({ question }: { question: string }) => {
	return (
		<>
			<li>
				<Link
					className="text-blue-700 underline"
					href={question}
					target="_blank"
				>
					Question
				</Link>
			</li>
		</>
	);
};

export default FrontendQuestion;