Live(){
	Live.Off
} // End of Live

Text(){
	"You configure the picture on the dispay screen.  Press the RUN button and you will see a 'change picture' button in the lower right hand corner."
} // End of Text

Role(){
	TextRole.Default
} // End of Role

Overflow(){
	Overflow.Hidden
} // End of Overflow

Color(){
	RGBA(0, 0, 0, 1)
} // End of Color

DisabledColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledColor

PressedColor(){
	Label1.Color
} // End of PressedColor

HoverColor(){
	Label1.Color
} // End of HoverColor

BorderColor(){
	RGBA(0, 18, 107, 1)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(56, 56, 56, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	Label1.BorderColor
} // End of PressedBorderColor

HoverBorderColor(){
	Label1.BorderColor
} // End of HoverBorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

FocusedBorderColor(){
	Label1.BorderColor
} // End of FocusedBorderColor

Fill(){
	RGBA(0, 0, 0, 0)
} // End of Fill

DisabledFill(){
	RGBA(0, 0, 0, 0)
} // End of DisabledFill

PressedFill(){
	Label1.Fill
} // End of PressedFill

HoverFill(){
	Label1.Fill
} // End of HoverFill

Font(){
	Font.'Open Sans'
} // End of Font

FontWeight(){
	FontWeight.Normal
} // End of FontWeight

Align(){
	Align.Left
} // End of Align

VerticalAlign(){
	VerticalAlign.Middle
} // End of VerticalAlign

X(){
	119
} // End of X

Y(){
	287
} // End of Y

Width(){
	1101
} // End of Width

Height(){
	57
} // End of Height

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

ZIndex(){
	AutoValue
} // End of ZIndex

LineHeight(){
	1.2
} // End of LineHeight

BorderThickness(){
	0
} // End of BorderThickness

FocusedBorderThickness(){
	0
} // End of FocusedBorderThickness

Size(){
	13
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

PaddingTop(){
	5
} // End of PaddingTop

PaddingRight(){
	5
} // End of PaddingRight

PaddingBottom(){
	5
} // End of PaddingBottom

PaddingLeft(){
	5
} // End of PaddingLeft

Visible(){
	If(Radio1.SelectedText.Value ="Show Video",false,true)
} // End of Visible

