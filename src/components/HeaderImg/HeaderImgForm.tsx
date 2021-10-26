import { useState, useEffect } from 'react';
import {
	getPresignedUrl,
	putToAWS,
	postToDatabase,
} from '../../awsS3/helperFunctions';


const HeaderImgForm = ({ setIsEditing, filmEPK }: any) => {
	const [headerFile, setHeaderFile] = useState<any>({});

	useEffect(() => {
    if (headerFile.size > 0) {
      makeAWSpost();
    }
		console.log('headerFile',headerFile)
  }, [headerFile])

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const input = document.querySelector<any>('#header-input').files[0];

		if (input) {
			setHeaderFile(input);
		}
	};

	const handleImg = (event: any) => {
		event.preventDefault();
		setIsEditing(false);
	}

	const makeAWSpost = async () => {
		const presignedFileParams = await getPresignedUrl(headerFile);
		const awsRes = await putToAWS(presignedFileParams, headerFile);
		const data: any = await postToDatabase(
			presignedFileParams,
			filmEPK,
			'header_images'
		);
		// setHeaderImg(data.header_image_url);
	};

	return (
		<form>
			<div className="header-img-form">
				<h2>Choose an image you'd like to go here</h2>
				<input
					id="header-input"
					type="file"
					accept="image/*"
				/>
				<button
					onClick={(event) => {
						handleSubmit(event);
					}}
				>
					Save
				</button>
				<button
					onClick={(event) => {
						handleImg(event);
					}}
				>
					View Image
				</button>
			</div>
		</form>
	);
};

export default HeaderImgForm;
