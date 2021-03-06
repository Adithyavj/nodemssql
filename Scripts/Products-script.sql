USE [Products]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 31-01-2022 12.55.44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[Id] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NULL,
	[Quantity] [float] NULL,
	[Message] [nvarchar](max) NULL,
	[City] [nvarchar](50) NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[InsertOrders]    Script Date: 31-01-2022 12.55.44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Name
-- Create date: 
-- Description:	
-- =============================================
CREATE PROCEDURE [dbo].[InsertOrders]
(
	@Id numeric(18,0) = 0,
	@Title nvarchar(50) = '',
	@Quantity float = 0,
	@Message nvarchar(MAX) = '',
	@City nvarchar(50) = ''
)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO dbo.Orders (Title, Quantity, [Message], City) 
	VALUES	(@Title, @Quantity, @Message, @City)
	RETURN 1;
END
GO
