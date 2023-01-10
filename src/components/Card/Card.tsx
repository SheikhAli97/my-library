import * as React from "react"

import { hexToRgb, rgbToHex, styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { grey, red } from "@mui/material/colors"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { flexbox } from "@mui/system"

export default function RecipeReviewCard() {
  return (
    <Card
      className="card"
      sx={{
        minWidth: 300,
        maxWidth: 600,
        maxHeight: 600,
        minHeight: 600,
        margin: 2,
        borderRadius: 3,
        bgcolor: hexToRgb("#373737"),
        color: hexToRgb("#808080"),
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            sx={{
              color: hexToRgb("#808080"),
            }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: hexToRgb("#808080"),
          }}
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          sx={{
            color: hexToRgb("#808080"),
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon
            sx={{
              color: hexToRgb("#808080"),
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  )
}
