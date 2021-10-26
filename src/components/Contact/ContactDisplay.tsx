import { FilmEPK } from '../../types';

interface IContactDisplay {
	filmEPK: FilmEPK;
}

const ContactDisplay = ({ filmEPK }: IContactDisplay) => {
	return (
		<section className="contact-display">
			<h2>Contact</h2>
			{filmEPK?.attributes && (
				<div className="contact-info">
					<p className="contact-name">{filmEPK.attributes.contact_name}</p>
					<p className="contact-email">
						email: {filmEPK.attributes.contact_email}
					</p>
					<p className="contact-number">
						mobile: {filmEPK.attributes.contact_number}
					</p>

					<p className="contact-website">
						<span>website: </span>
						<a href={filmEPK.attributes.website} className="website-link">
							{filmEPK.attributes.website}
						</a>
					</p>

					<p className="contact-company">{filmEPK.attributes.company_name}</p>
				</div>
			)}
		</section>
	);
};

export default ContactDisplay;
