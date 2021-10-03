import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import img_placeholder_W from '../../../../images/img_placeholder_W.jpg';
import img_placeholder_M from '../../../../images/img_placeholder_M.jpg';

const PersonSmallCard = ({ person }) => {
	const classes = useStyles();

	const { id, name, profile_path, character, job, gender } = person;

	const image = profile_path
		? `https://www.themoviedb.org/t/p/w66_and_h66_face/${profile_path}`
		: gender === 2
		? img_placeholder_M
		: img_placeholder_W
	
	return (
		<Box key={id} className={classes.card}>
			<Link to={`/person/${id}`}>
				<Box className={classes.imgWrapper}>
					<img src={image} alt="" width="100%"/>
				</Box>
			</Link>
			<Box className={classes.titles}>
				<Link to={`/person/${id}`}>
					<Typography variant="subtitle1" className={classes.name}>
						{name}
					</Typography>
				</Link>
				<Typography color="textSecondary">{character || job}</Typography>
			</Box>
		</Box>
	);
};

export default PersonSmallCard;