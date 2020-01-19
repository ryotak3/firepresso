import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Articles from "./blog/Articles";
import CommonFrame from "./CommonFrame";
import MUILink from "@material-ui/core/link";
import { Link } from "react-router-dom";
const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        paddingTop: theme.spacing(10)
    },
    caption: {
        textAlign: "center",
        width: "100%"
    }
});
const Home = props => {
    const { classes, user, db } = props;
    const [postList, setPostList] = useState([
        {
            authorId: "X2xNkAKGDYVh77jpzLXW9UvvACf2",
            articleId: "M1Xd9olv15DRqK9b257x",
            title: "CMS作ってみた"
        },
        {
            authorId: "X2xNkAKGDYVh77jpzLXW9UvvACf2",
            articleId: "MhwVvM8RDx94qPiFBcmc",
            title: "コメントつけてみた"
        },
        {
            authorId: "X2xNkAKGDYVh77jpzLXW9UvvACf2",
            articleId: "PIHS8WYmc0wDWUOnv4BR",
            title: "発表まで時間短すぎ"
        }
    ]);
    const message = (
        <Grid className={classes.caption}>
            <Typography component="h2" variant="h5" gutterBottom>
                Welcome to Firepresso! Please login!!
                {postList.map(article => {
                    return (
                        <div key={article.articleId}>
                            <MUILink
                                component={Link}
                                to={`/article/${article.authorId}/${article.articleId}`}
                            >
                                {article.title}
                            </MUILink>
                        </div>
                    );
                })}
            </Typography>
        </Grid>
    );
    const articles = (
        <Grid className={classes.caption}>
            <Articles user={user} db={db} />
        </Grid>
    );
    return <CommonFrame user={user}>{user ? articles : message}</CommonFrame>;
};
Home.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
