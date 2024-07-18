
FROM maven:3.9.8-eclipse-temurin-17-alpine as builder

# Copy local code to the container image.
WORKDIR /app
COPY pom.xml .
COPY src ./src

# Build a release artifact.
RUN mvn package -DskipTests

# Use AdoptOpenJDK for base image.
FROM openjdk:17-jdk-alpine3.14

# Copy the jar to the production image from the builder stage.
COPY --from=builder /app/target/dementia-care-service-*.jar /dementia-care-service.jar

# Expose
EXPOSE 8080

# Run the web service on container startup.
CMD ["java", "-jar", "/dementia-care-service.jar"]