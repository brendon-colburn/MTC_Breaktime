Text(){
	"Change Picture"
} // End of Text

UseMobileCamera(){
	false
} // End of UseMobileCamera

BorderColor(){
	RGBA(0, 18, 107, 1)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(56, 56, 56, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	ColorFade(AddMediaButton1.BorderColor, -20%)
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(AddMediaButton1.BorderColor, 20%)
} // End of HoverBorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

FocusedBorderColor(){
	AddMediaButton1.BorderColor
} // End of FocusedBorderColor

Color(){
	RGBA(0, 0, 0, 1)
} // End of Color

DisabledColor(){
	RGBA(186, 186, 186, 1)
} // End of DisabledColor

PressedColor(){
	AddMediaButton1.Color
} // End of PressedColor

HoverColor(){
	AddMediaButton1.Color
} // End of HoverColor

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

Fill(){
	RGBA(255, 255, 255, 1)
} // End of Fill

DisabledFill(){
	RGBA(119, 119, 119, 1)
} // End of DisabledFill

PressedFill(){
	ColorFade(AddMediaButton1.Fill, -20%)
} // End of PressedFill

HoverFill(){
	ColorFade(AddMediaButton1.Fill, 20%)
} // End of HoverFill

Font(){
	Font.'Open Sans'
} // End of Font

FontWeight(){
	FontWeight.Semibold
} // End of FontWeight

Align(){
	Align.Center
} // End of Align

VerticalAlign(){
	VerticalAlign.Middle
} // End of VerticalAlign

X(){
	1232
} // End of X

Y(){
	739
} // End of Y

Width(){
	124
} // End of Width

Height(){
	26
} // End of Height

ZIndex(){
	AutoValue
} // End of ZIndex

BorderThickness(){
	0
} // End of BorderThickness

FocusedBorderThickness(){
	2
} // End of FocusedBorderThickness

Size(){
	10
} // End of Size

Italic(){
	false
} // End of Italic

Underline(){
	false
} // End of Underline

Strikethrough(){
	false
} // End of Strikethrough

Visible(){
	If(Radio1.SelectedText.Value ="Show Video",false,true
	)
} // End of Visible

